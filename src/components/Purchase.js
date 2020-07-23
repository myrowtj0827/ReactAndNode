import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  PURCHASE_PAGE_LOADED, 
  PURCHASE_PAGE_UNLOADED,
} from '../constants/actionTypes';
import * as moment from 'moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { QRCode } from "react-qr-svg";


const mapStateToProps = state => ({
  ...state.purchase,
  currentUser : state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: PURCHASE_PAGE_LOADED, payload}),
  onUnload: () =>
    dispatch({ type: PURCHASE_PAGE_UNLOADED }),
});

class Purchase extends React.Component {
  constructor() {
    super();

    this.exportPdf = () => {
      // html2canvas(document.querySelector("#capture")).then(canvas => {
      //   document.body.appendChild(canvas);  // if you want see your screenshot in body.
      //   const imgData = canvas.toDataURL('image/png');
      //   const pdf = new jsPDF();
      //   pdf.addImage(imgData, 'PNG', 10, 10);
      //   pdf.save("ticket.pdf"); 
      // });
    }
  }

  componentWillMount() {
    if(this.props.match.params.slug)
      this.props.onLoad(agent.Purchases.get(this.props.match.params.slug));
    else
      this.props.onLoad(agent.Purchases.getAll());
  }

  componentWillUnmount() {
    this.props.onUnload();    
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.slug){
      if(this.props.match.params.slug !== nextProps.match.params.slug) {
        this.props.onLoad(agent.Purchases.get(nextProps.match.params.slug));
      }
    }
    // else {
    //   this.props.onLoad(agent.Purchases.getAll());
    // }
  }

  render() {
    var purchase = this.props.purchase;
    var purchases = this.props.purchases;
    if (purchases && purchases.length > 0)
      return (
        <div className="purchases-page">
          <div className="container">
            <h2 className="page-title">My Purchases</h2>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Order No</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                { purchases.map(purchase => 
                  <tr>
                    <td>{purchase.slug}</td>
                    <td>{purchase.createdAt}</td>
                    <td>{purchase.status? 'Pending' : 'Accepted'}</td>
                    <td 
                      className="p__info"
                      onClick={ () => this.props.history.push(`/purchase/${purchase.slug}`)}
                    >
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )
    return (
      <div className="article-page">
        <div className="container" id="capture">
          { purchase?
              <div className="buy__ticket__wrapper">
                <div className="b__t__header">
                    <h4>{ purchase.article.title }</h4>
                    <p>{ purchase.article.eventDate}  From {purchase.article.eventTimeFrom} To { purchase.article.eventTimeTo }</p>
                </div>
                <div className="b__t__content">
                  <div className="b__t__item purchased">
                    <p>Order No &nbsp; #{ purchase.slug }</p>
                  </div>                                     
                  <div className="b__t__item">
                    <div className="b__t__contact">
                      <p><strong>Tickets sent to</strong><span>{ purchase.contact.email}</span></p>
                      <p><strong>Date</strong><span>{moment( purchase.createdAt).format('YYYY-MM-DD, H:mm:ss')}</span></p>
                      <p><strong>Category</strong><span>{ purchase.article.category}</span></p>
                      <p><strong>Location</strong><span>{ purchase.article.locality}, { purchase.article.country}</span></p>
                    </div>
                    <div className="b__t__contact">
                      <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 128 }}
                        value={ 'https://worldsty.com/purchase/'+purchase.slug }
                      />
                    </div>
                  </div>
                  <div className="b__t__ctrls">
                    { this.props.currentUser && (
                      <button className="btn" onClick={ () => this.props.history.push('/purchase') }>My Tickets</button>
                    )}
                    {/*<button onClick={ () => this.exportPdf() } className="btn btn-red">Print</button>*/}
                    <button className="btn" onClick={ () => this.props.history.push('/') }>Continue</button>
                  </div>
                </div>
              </div>
            :
              <div className="buy__ticket__wrapper">
                <div className="b__t__content">
                  <div className="b__t__ctrls">
                    <button className="btn" onClick={ () => this.props.history.push('/') }>Continue</button>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Purchase);
  