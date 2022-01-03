import { images } from '../utils/Images'

export const myCV = {
  name: 'Thái Minh Khoa',
  role: 'Senior Mobile Engineer',
  summary: [
    {
      id: 1,
      text: 'Mobile Developer with 3 years experience and strong knowledge of various programming languages including Swift, Kotlin, Java, Dart, Typescript, etc...'
    },
    {
      id: 2,
      text: 'Passionate about researching latest architecture, framework, plugin and engine to reduce coding time for team and create a pixel perfect application. I would like to be challenged by experiencing myself in higher position.'
    }
  ],
  history: [
    {
      jobTitle: 'Mobile Developer',
      employer: 'PayME Corporation',
      startDate: 'Dec, 2019',
      endDate: 'Present',
      city: 'Ho Chi Minh City',
      description: [
        { id: 1, text: 'Train and manage freshers' },
        { id: 2, text: 'Resolve critical bugs and complex problems' },
        { id: 3, text: 'Optimize React Native app\'s performance' },
        { id: 4, text: 'Handle project\'s requirement by native code (keyboard, background service, native API, ..)' },
        { id: 5, text: 'Build native modules (Android, iOS)' },
        { id: 6, text: 'Develop app following the design' }
      ]
    },
    {
      jobTitle: 'React Native Developer',
      employer: 'Ant Tech Ltd.',
      startDate: 'Jan, 2019',
      endDate: 'Sep, 2019',
      city: 'Ho Chi Minh City',
      description: [
        { id: 1, text: 'Manage and estimate task duration' },
        { id: 2, text: 'Train and manage freshers' },
        { id: 3, text: 'Communicate and work with foreign clients' },
        { id: 4, text: 'Maintain and refactor project' },
        { id: 5, text: 'Participate in the assigned project development' }
      ]
    }
  ],
  skills: {
    framework: [
      { id: 1, text: 'React Native' }, { id: 2, text: 'Flutter' }
    ],
    versionControl: [
      { id: 3, text: 'Git' },
      { id: 4, text: 'Github' }, { id: 5, text: 'Gitlab' }
    ],
    languages: [
      { id: 6, text: 'Javascript' }, { id: 7, text: 'Typescript' }, { id: 8, text: 'Swift (iOS)' },
      { id: 9, text: 'Java/Kotlin (Android)' }
    ],
    programmingParadigm: [
      { id: 10, text: 'Reactive Programming' }, { id: 11, text: 'Functional Programming' },
      { id: 12, text: 'Object Orientation Programming' }
    ]
  },
  project: [
    {
      id: 1,
      title: 'PayME Wallet',
      description: 'Ví điện tử tối thượng',
      cover: {
        type: 'local',
        source: images.payMECover
      },
      screenshots: [
        'https://play-lh.googleusercontent.com/fNcXOaE3H6_iEJTKJZwCv4phMGL-mJeIW4fYlvN8gRTMKiXgiKSM191FL1tlE75SBuE=w1635-h1308',
        'https://play-lh.googleusercontent.com/eSXrG0orom5SxwqKHZ8lQl1NlsjLPOeAbSyhxcyvESuL1LABr0y0ahCW79qL9KXW3rCh=w1635-h1308',
        'https://play-lh.googleusercontent.com/Giseo9vyn6B48Jh58aweUTIhQZuTj1mkApvSdKt1kv9IkAQ0jDDovRjbg0d54UMO4PVL=w1635-h1308',
        'https://play-lh.googleusercontent.com/0kVUseSBpvuzFIlfPOVDH4WS_EOA3_NASqg3UGPvh25DSZQAb2Bh2MtkLipO-bXiH2o=w1635-h1308',
        'https://play-lh.googleusercontent.com/z1i0ZRratoh3CbJKpIOdBn9xtCDcJeKfxWHp75l4iGvlUk2e_HDGKBWdZAeaV2arpVw=w1635-h1308',
        'https://play-lh.googleusercontent.com/_SF4tVGsAkauo7WUZKPvwamTU1XnUOTBP8QTu07E7una3xyxXt-r-mSYzWrSKv7bJg=w1635-h1308',
      ]
    },
    {
      id: 1,
      title: 'PayME Wallet',
      description: 'Ví điện tử tối thượng',
      cover: {
        type: 'local',
        source: images.payMECover
      },
      screenshots: [
        'https://play-lh.googleusercontent.com/fNcXOaE3H6_iEJTKJZwCv4phMGL-mJeIW4fYlvN8gRTMKiXgiKSM191FL1tlE75SBuE=w1635-h1308',
        'https://play-lh.googleusercontent.com/eSXrG0orom5SxwqKHZ8lQl1NlsjLPOeAbSyhxcyvESuL1LABr0y0ahCW79qL9KXW3rCh=w1635-h1308',
        'https://play-lh.googleusercontent.com/Giseo9vyn6B48Jh58aweUTIhQZuTj1mkApvSdKt1kv9IkAQ0jDDovRjbg0d54UMO4PVL=w1635-h1308',
        'https://play-lh.googleusercontent.com/0kVUseSBpvuzFIlfPOVDH4WS_EOA3_NASqg3UGPvh25DSZQAb2Bh2MtkLipO-bXiH2o=w1635-h1308',
        'https://play-lh.googleusercontent.com/z1i0ZRratoh3CbJKpIOdBn9xtCDcJeKfxWHp75l4iGvlUk2e_HDGKBWdZAeaV2arpVw=w1635-h1308',
        'https://play-lh.googleusercontent.com/_SF4tVGsAkauo7WUZKPvwamTU1XnUOTBP8QTu07E7una3xyxXt-r-mSYzWrSKv7bJg=w1635-h1308',
      ]
    }
  ]
}
