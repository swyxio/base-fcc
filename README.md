# Base + FCC
A starting point for building FreeCodeCamp projects with Meteor. Because Meteor is awesome and is a perfect fit for FCC-size projects. Forked from [gstephen's MeteorChef/Base Restricted Access Branch at v4.10.0](https://github.com/rgstephens/base/tree/extendDoc)

<table>
  <tbody>
    <tr>
      <th>Base Version</th>
      <td>v4.10.0</td>
    </tr>
    <tr>
      <th>Meteor Version</th>
      <td>v1.4.2.3</td>
    </tr>
  </tbody>
</table>

[Read the Documentation](http://themeteorchef.com/base)

This code is published on github at <https://github.com/sw-yx/base-fcc> and a sample is hosted on heroku at <https://base-fcc.herokuapp.com/>

# Features From gstephen's Branch

This extension to [Meteor Base](http://themeteorchef.com/base) adds an ownerId field to the Documents collection and restricts document access to the owner. It also adds fields to the document to track create & modify date.

# Features Added in This Fork

- Twitter login
- Unauthenticated view of all documents (without Editing ability although the API may be hackable)
- My Documents page

# I'm New To Meteor, How To Get This Running On Local?

borrowing heavily from <https://themeteorchef.com/base/getting-started> (go ahead and read the whole thing if you have time):

0. open up your terminal and go to your favorite webdev terminal
1. `git clone https://github.com/sw-yx/base-fcc.git base-fcc` (replace "base-fcc" with whatever name you want)
2. `meteor npm install`
3. `meteor npm start`
4. once the app has compiled, open `localhost:3000` in your browser

# Deploy to Heroku

Just check this out :) <https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234#.nmyq8xpf7>