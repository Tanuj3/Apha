import React from 'react';
import '../../Stylesheet/ContactUs.css';

export default function ContactUs() {
  return (
  <>
  <head>
    <meta charset="UTF-8"/>
    <title> Responsive Contact Us Form  | CodingLab </title>
    <link rel="stylesheet" href="ContactUs.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

<body>
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">South Delhi, New Delhi</div>
          <div class="text-two">India</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+918588958674</div>
          <div class="text-two">+919560055140</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">info@thekaurresearch.com</div>
          <div class="text-two">teji@thekaurresearch.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have types of quries related to us, you can send us a message from here. It's our pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <input type= "text" placeholder="Enter your message"/>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
</body>

  </>
  );
}
