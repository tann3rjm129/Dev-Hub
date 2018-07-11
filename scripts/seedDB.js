const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/projectinfo');

const userSeed = [
  {
    name: 'Ifra',
    email: 'Ifra@Ifra.com',
    password: "12345",
    projectName: "the Ifra Project",
    githubLink: "https://github.com/",

    synopsis:
      "Explore the project and fund it to your liking",
    image1: 'https://i.pinimg.com/originals/8a/09/7d/8a097dca5e6638968dc8ff101119d0ad.png',
    image2: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/14382230282-w800.jpg',
    image3: 'https://i.pinimg.com/originals/8b/89/7e/8b897eae1cb592ee10e1e74b116cfc9d.jpg',
    donationGoal: 1000,
    donationCurrent: 0,
    reasonForDonation: "I need it to expand my app to make better things",
    donationUsedFor: "It will be used to buy a better computer to better handle modern.",
    date: new Date(Date.now()),
  },
  {
    name: 'Shaughn',
    email: 'Shaughn@Shaughn.com',
    password: "67890",
    projectName: "the Shaughn Project",
    githubLink: "https://github.com/",
    synopsis:
      "A project that will hopefully work",
    image1: 'https://s-media-cache-ak0.pinimg.com/originals/64/76/ac/6476ac89ab014c485f3eb3445ff43025.jpg',
    image2: 'https://mir-s3-cdn-cf.behance.net/projects/202/143e3b67286551.Y3JvcCwxMDIyLDc5OSwxMzYsMTA4Mg.jpg',
    image3: 'http://mariospittas.com/wp-content/uploads/2016/09/user-settings.jpg',
    donationGoal: 2000,
    donationCurrent: 0,
    reasonForDonation: "I need it be able to complete my idea to get it to the app marketplace asap",
    donationUsedFor: "I need it to hire a temporary additional developer",
    date: new Date(Date.now()),
  },
  {
    name: 'Tanner',
    email: 'Tanner@Tanner.com',
    password: "24680",
    projectName: "Tech without borders",
    githubLink: "https://github.com/",
    synopsis:
      "A project that will expand technological advances to those without the means.",
    image1: 'http://www.graphic-exchange.com/images2012/05web/DannPetty/hd_df6a92de9d46cc8494616433bdecb407.jpg',
    image2: 'https://i.pinimg.com/originals/b8/0a/6e/b80a6e07b27a0a8340cae47388b9bfd6.jpg',
    image3: 'https://i.pinimg.com/236x/fa/30/93/fa30932afedac5e01798a7dd22032b8d--photo-manipulation-zombies.jpg',
    donationGoal: 10000,
    donationCurrent: 0,
    reasonForDonation: "I'd like to update my current brick and motar store to allow more guests to assist.",
    donationUsedFor: "I need it to apply an addition and necessary updates to expand the amount of people I can help.",
    date: new Date(Date.now()),

  },
  {
    name: 'Kevin',
    email: 'Kevin@Kevin.com',
    password: "11223",
    projectName: "Stuff and Stuff",
    githubLink: "https://github.com/",
    synopsis:
      "An app that allows people to trade their stuff for other stuff locally and citywide",
    image1: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2017/07/best-of-behance-inspiration-1.png',
    image2: 'http://cdn.dribbble.com/users/7270/screenshots/3317713/dribbble_doxxbet.jpg',
    image3: 'http://iaaawards.org/blog/wp-content/uploads/2017/10/Screen-Shot-2017-10-05-at-4.59.39-PM-e1507533119585.png',
    donationGoal: 8000,
    donationCurrent: 0,
    reasonForDonation: "I'd like to update my current system set up to provie a better service",
    donationUsedFor: "Something Cool",
    date: new Date(Date.now()),
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });