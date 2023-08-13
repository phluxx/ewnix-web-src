<template>
  <div class="content">
  <p>Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.</p>
  <p>Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.</p>
  <p>In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.</p>
  <p>The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.</p>
  <p>You can check the status of our project by visiting <a class="content-link" href="https://bugzilla.ewnix.net">our issue tracker</a>, which will include up-to-date feature requests, bug reports, and statuses on those projects.</p>
  </div>
</template>
<style scoped>
.content {
  margin-top: 30px;
  margin-right: 220px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}

.content-link {
  color: rgba(76, 175, 80, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.content-link:hover {
  color: #4CAF50;
  text-decoration: none;
}
</style>
