import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => (
  <div className="container">
    {props.children}
    <GrFormClose className="icon1" />
  </div>
)

export default Notification
