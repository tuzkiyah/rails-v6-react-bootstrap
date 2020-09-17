// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.


import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap'


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


import Home from '../components/Home';

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})

document.addEventListener("turbolinks:load", function() {
  console.log('im working');
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  console.log('im working');
});
