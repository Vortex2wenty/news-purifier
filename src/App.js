import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'index' };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState(() => ({
      page
    }));
  }

  render() {
    if (this.state.page === 'index') {
      return (
        <div id="body">
          <Navbar changePage={this.changePage} />
          <div class="px-4 py-5 my-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="./logo.svg"
              alt=""
              width="128"
              height="128"
            />
            <h1 class="display-5 fw-bold">News Purifier</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">
                Purify your news feed with happier and upbeat stories!
              </p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  Get the Extension
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'about') {
      return (
        <div id="body">
          <Navbar changePage={this.changePage} />
          <div class="text-center">
            <h1 class="display-5 fw-bold">About</h1>
            <p class="lead w-75 m-auto mb-4">In the recent times of the pandemic, the news has been a crucial part in our lives for understanding everything that’s going on around us. It informs us what we are allowed to do and not allowed to do, as well as crucial information such as new restrictions or lockdowns. As important as news like this can be, it adds a lot of extra stress to our lives. We are constantly being flooded with information all around the Internet, whether we like it or not. Sometimes, we just want to get away from the noise and have some peace in our lives. The solution that immediately comes to mind is disconnecting from our online presence, whether that be for an hour, a day, or even a week. However, this is extremely hard to do in these current situations, considering a lot of our lives is online, whether that be talking with friends, school, work, and so on. With that in mind, I have come up with a tool called News Purifier. With the News Purifier extension, you can filter out the bad news with just a click of a button. Behind the scenes, with a list of certain keywords for certain news subjects (e.g. violence, COVID-19, etc.), we will get rid of those articles from your news feed on supported sites (see supported sites for more info). You can either choose a pre-configured keyword to replace that article (from which we will automatically choose an article for you), or you can choose to just simply remove it from your sight. This is mostly a proof of concept, with basic functionality currently implemented but a more complex foundational idea.</p>
          </div>
        </div>
      );
    } else if (this.state.page === 'faq') {
      return (
        <div id="body">
          <Navbar changePage={this.changePage} />
          <div class="text-center">
            <h1 class="display-5 fw-bold">FAQ</h1>
            <h2>What does this do?</h2>
            <p class="lead w-75 m-auto mb-4">An extension for Google Chrome which allows you to “purify” your news feed with subjects to your liking. All you have to do to get started is click the extension icon on the Chrome extension bar and click the “purify” button. When you click this, the magic will happen.</p>
            <h2>Why not just select the subjects you want on the news aggregator?</h2>
            <p class="lead w-75 m-auto mb-4">Even if you select subjects that you believe will keep you away from bad news, for example technology or web development, some bad news and keywords can still bleed into an article. When I tried to set aside a certain time each week to catch up on important ‘bad’ news, and for the rest of the week only read ‘good’ interesting news to me, I still found some subjects that I didn’t want to read at the moment bleed into the article.</p>
            <h2>What sites are supported?</h2>
            <p class="lead w-75 m-auto mb-4">The current sites supported include:</p>
            <ul class="w-75 m-auto mb-4">
              <li class="w-25 m-auto mb-4">Google News</li>
              <li class="w-25 m-auto mb-4">... and more to come!</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default App;
