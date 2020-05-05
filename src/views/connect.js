import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import InstagramEmbed from 'react-instagram-embed';
import ScrollAnimation from 'react-animate-on-scroll';

import text from '../constants/english.json';

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const Connect = () => (
  <div className="connect">
    <ScrollAnimation
      duration={1}
      animateIn="fadeIn"
    >
      <div
        className="connect__subscribe"
      >
        <h2 className="connect__header">
          {text.connect.subscribe.header}
        </h2>
        <p className="connect__sub-title">
          {text.connect.subscribe.subTitle}
        </p>
        <MailchimpSubscribe
          className="connect__mailchimp"
          url={url}
        />
      </div>
    </ScrollAnimation>
  </div>
)

export default Connect;
