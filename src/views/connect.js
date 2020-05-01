import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import InstagramEmbed from 'react-instagram-embed';
import ScrollAnimation from 'react-animate-on-scroll';

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const Connect = () => (
  <div>
    <ScrollAnimation
      style={{
        width: '80%',
        margin: '0 auto',
      }}
      duration={1}
      animateIn="fadeIn"
    >
      <MailchimpSubscribe url={url}/>
    </ScrollAnimation>
    <div style={{ padding: '20px 0', borderBottom: '1px solid black' }} />
    <ScrollAnimation
      style={{
        width: '80%',
        margin: '0 auto',
      }}
      duration={1}
      animateIn="fadeIn"
    >
      <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        hideCaption
        containerTagName='div'
      />
    </ScrollAnimation>
  </div>
)

export default Connect;
