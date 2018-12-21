import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

export default class curriculumScreen extends Component {
  render() {
    return (
      <WebView
      source={{uri: 'https://docs.google.com/viewer?url=http://www.puc.edu.kh/images/files/curriculum/graduate/fmse/computer-science.pdf'}}
      style={{marginTop: 32, background: '#fff'}}
    />
    )
  }
}
