const express = require('express');
const bodyParser = require('body-parser');
const { TeamMember, Op } = require('./model');

const app = express();
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/form', async (req, res) => {

  const { firstName, lastName, title, story, favoriteColor, photoUrl } = req.body;
  const existingUser = await TeamMember.findAll({
    where: {
      firstName: {
        [Op.eq]: firstName
      },
      lastName: {
        [Op.eq]: lastName
      }
    }
  });

  if(existingUser.length){
    return res.status(409).send();
  }

  const newMember = await new TeamMember({
    firstName,
    lastName,
    title,
    story,
    favoriteColor,
    photoUrl
  });


  try {
    await newMember.save()
    res.status(200).send();
  } catch(err){
    res.status(422).send(err);
  }
});

module.exports = app;
