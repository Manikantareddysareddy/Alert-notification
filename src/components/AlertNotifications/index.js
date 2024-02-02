import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle className="icon" color="#2dca73" />
          <div className="detail-container">
            <h1 className="success-heading">Success</h1>
            <p className="success-para">
              You can access all the files in the folder
            </p>
          </div>
        </Notification>

        <Notification>
          <RiErrorWarningFill className="icon" color="#ff0b37" />
          <div className="detail-container">
            <h1 className="success-heading1">Error</h1>
            <p className="success-para">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>

        <Notification>
          <MdWarning className="icon" color="#ffb800" />
          <div className="detail-container">
            <h1 className="success-heading2">Warning</h1>
            <p className="success-para">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>

        <Notification>
          <MdInfo className="icon" color="#0f81e0" />
          <div className="detail-container">
            <h1 className="success-heading3">Info</h1>
            <p className="success-para">
              Anyone on the internet can view these files
            </p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
