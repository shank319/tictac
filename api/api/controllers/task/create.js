module.exports = {


  friendlyName: 'Create',


  description: 'Create task.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

      var createdUser = await Task.create({title:'Some task here'}).fetch();

      sails.log('Finn\'s id is:', createdUser.id);


    return exits.success();

  }


};
