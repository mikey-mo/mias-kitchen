import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
 
const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const Connect = () => (
  <div>
    <MailchimpSubscribe url={url}/>
  </div>
)

export default Connect;
