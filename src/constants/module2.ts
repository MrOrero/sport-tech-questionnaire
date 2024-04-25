export type module_two_questions = {
  question: string;
  option: option[];
  correctAnswer: string;
};

export type option = {
  key: string;
  option: string;
};

export const MODULE_TWO_QUESTIONS: module_two_questions[] = [
  {
    question:
      "You're at the coffee shop before a game and need to check some e-mails. What should you be cautious about when using the shop's Wi-Fi?",
    option: [
      { key: "a", option: "Keep your device unlocked." },
      { key: "b", option: "Avoid logging into any accounts." },
      { key: "c", option: "Use the Wi-Fi for streaming videos." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "When entering your credit card information online, what should you look for to ensure security?",
    option: [
      {
        key: "a",
        option: "Sharing your credit card details in a private chat.",
      },
      {
        key: "b",
        option:
          "A padlock icon in the address bar indicates a secure connection.",
      },
      { key: "c", option: "The most colourful website page" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "What should you do if you receive a friend request from someone claiming to be a fan?",
    option: [
      { key: "a", option: "Ignore the request and report it if suspicious." },
      { key: "b", option: "Share your contact details with them." },
      { key: "c", option: "Accept the request." },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "While at a public event, a stranger approaches you and asks for your phone number. What should you do?",
    option: [
      { key: "a", option: "Politely decline and walk away." },
      { key: "b", option: "Provide your number right away." },
      { key: "c", option: "Ask for their number instead." },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "While in the locker room, you notice someone trying to access your locker. What should you do?",
    option: [
      { key: "a", option: "Ask them politely what they are doing." },
      {
        key: "b",
        option: "Report the incident to the club’s security or your coach.",
      },
      { key: "c", option: "Give them the combination to your locker." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "After winning an important game, you want to celebrate on social media. What precautions should you take when posting?",
    option: [
      { key: "a", option: "Share personal contact information." },
      {
        key: "b",
        option: "Share the place and time of the next game.",
      },
      { key: "c", option: "Tag your location in real time." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "You notice that your smartphone is acting strangely, with apps constantly crashing and unexpected pop-ups showing. What's the safest course of action?",
    option: [
      { key: "a", option: "Ignore the problem and hope it goes away." },
      {
        key: "b",
        option: "Continue using the phone as usual.",
      },
      { key: "c", option: "Report the problem to the club’s IT department." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "You receive an email with a link that claims to provide exclusive athlete training recommendations, what is the safest course of action?",
    option: [
      { key: "a", option: "Share the email with your teammates." },
      {
        key: "b",
        option: "Do not open the email; instead, delete it.",
      },
      { key: "c", option: "Click on the link to access the tips." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "You receive a notification that someone from a different country is trying to log in to any of your social media accounts. What should you do?",
    option: [
      { key: "a", option: "Ignore the notification." },
      {
        key: "b",
        option: "Allow the login attempt.",
      },
      { key: "c", option: "Change your password immediately." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "A link to a video analysis tool for the next game is sent to you by your coach. Before you click the link, what should you do?",
    option: [
      { key: "a", option: "Verify with your coach if they sent the link." },
      {
        key: "b",
        option: "Forward the link with your teammates.",
      },
      { key: "c", option: "Click on the link right away." },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "You get an email from your video games claiming to offer free in-game currency if you click a link and log in with your game account details. What should you do?",
    option: [
      {
        key: "a",
        option: "Click on the link and login for the free currency.",
      },
      {
        key: "b",
        option: "Input your account information to claim the currency.",
      },
      { key: "c", option: "Report the email as spam." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "When your fitness tracker alerts you to the need for an update, what should you think about first before downloading the update?",
    option: [
      {
        key: "a",
        option: "Share the update link with your teammates.",
      },
      {
        key: "b",
        option: "Ignore it.",
      },
      {
        key: "c",
        option:
          "Verify that the update came from the manufacturer or the official app store.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "You receive a notification on your smartwatch asking for permission to access your location. What should you do?",
    option: [
      {
        key: "a",
        option: "Deny access until you understand why.",
      },
      {
        key: "b",
        option: "Allow access to your location.",
      },
      {
        key: "c",
        option: "Ignore the notification.",
      },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "You receive an email claiming to provide a free heart rate monitor app for your wearable. What is the safest action to take?",
    option: [
      {
        key: "a",
        option: "Download the app from the link.",
      },
      {
        key: "b",
        option:
          "To redeem the offer, enter the details of your wearable device.",
      },
      {
        key: "c",
        option:
          "Check the official app store to make sure the software is legitimate.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "You receive a prompt from your GPS sports watch to join a new Wi-Fi network. Which way is the safest to go?",
    option: [
      {
        key: "a",
        option: "Connect to the network and keep browsing.",
      },
      {
        key: "b",
        option: "Verify the security of the network before connecting.",
      },
      {
        key: "c",
        option: "Decline the connection request.",
      },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "You receive a message on your activity tracker offering a discount on sportswear. What's the safest action to take?",
    option: [
      {
        key: "a",
        option: "Ignore the message.",
      },
      {
        key: "b",
        option: "Follow the link provided.",
      },
      {
        key: "c",
        option: "Reply with your details to get the discount.",
      },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Your sleep tracker app requests permission to access your contacts. What should you do?",
    option: [
      {
        key: "a",
        option: "Ignore the request.",
      },
      {
        key: "b",
        option: "Allow access to your contacts without question.",
      },
      {
        key: "c",
        option: "Deny access until you understand why it's needed.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "You receive a request from a third-party app to access data from your wearable device for fitness tracking. What should you consider before granting access?",
    option: [
      {
        key: "a",
        option:
          "Deny access until you know how the data will be used and protected.",
      },
      {
        key: "b",
        option: "Ignore the request and keep using the app.",
      },
      {
        key: "c",
        option: "Share the data to support the app’s development.",
      },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "You accidentally leave your wearable device in the locker room after practice. What's the best action to take to prevent unauthorized access?",
    option: [
      {
        key: "a",
        option: "Wait until someone returns it to you.",
      },
      {
        key: "b",
        option: "Ignore the situation and wait till you get back.",
      },
      {
        key: "c",
        option: "Inform your coach/manager immediately.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Your team uses monitoring systems that require you to create an account with your details. What should you consider when creating the account?",
    option: [
      {
        key: "a",
        option: "Ignore the process and request manual entry.",
      },
      {
        key: "b",
        option:
          "Provide only necessary personal details and verify the system's security measures.",
      },
      {
        key: "c",
        option: "Share all requested personal details to access the system.",
      },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "You get a call from someone claiming to be from your team's administration office, asking for your login credentials to update their records. What should you do?",
    option: [
      {
        key: "a",
        option: "Hang up.",
      },
      {
        key: "b",
        option:
          "Ask for the caller's contact information and verify their identity with the team’s offices.",
      },
      {
        key: "c",
        option: "Provide your credentials.",
      },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "When creating a password for your accounts, which of the following is the most secure option?",
    option: [
      {
        key: "a",
        option: "Your pet’s name.",
      },
      {
        key: "b",
        option:
          "A combination of uppercase and lowercase letters, numbers, and symbols",
      },
      {
        key: "c",
        option: "Your birthdate",
      },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "You receive an email asking you to update your payment information for a subscription service you don't use. What's the best action to take?",
    option: [
      {
        key: "a",
        option: "Ignore the email and mark it as spam.",
      },
      {
        key: "b",
        option:
          "Click on the link in the email to update your payment information.",
      },
      {
        key: "c",
        option: "Share the email with your teammates for awareness.",
      },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "You click on a suspicious link and notice unusual activity on your device. What's the best course of action?",
    option: [
      {
        key: "a",
        option: "Continue using your device as usual.",
      },
      {
        key: "b",
        option: "Run a full system scan with antivirus software.",
      },
      {
        key: "c",
        option: "Ignore the activity.",
      },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Your teammate shares a photo of the team celebration on social media, tagging everyone. What should you consider before commenting on the post?",
    option: [
      {
        key: "a",
        option:
          "Consider the privacy settings and potential exposure of personal information.",
      },
      {
        key: "b",
        option:
          "Share the post with your social media followers for engagement.",
      },
      {
        key: "c",
        option: "Like and comment on the post.",
      },
    ],
    correctAnswer: "a",
  },
];
