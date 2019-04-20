var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.chat .username', function() {
      var username = this.textContent;
      Friends.toggleStatus(username);
    });
  },

//   'click', 'a.myclass', function() {
//     // do something
// });

  render: function() {
  },

  renderMessage: function(message) {
    // Input: message object to render
    // Return: nothing??
    // Get an html object/var from call MessageView.render(message)
    // Append the html to #chats
    if (message.username && message.text) {
      var chat = MessageView.render(message);
      this.$chats.append(chat);
    }
  }

};