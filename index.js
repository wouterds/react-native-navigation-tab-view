import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('routes.screen-a', () => require('./src/components/screen-a').default);
Navigation.registerComponent('routes.screen-b', () => require('./src/components/screen-b').default);
Navigation.registerComponent('routes.screen-c', () => require('./src/components/screen-c').default);
Navigation.registerComponent('routes.screen-d', () => require('./src/components/screen-d').default);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                options: {
                  topBar: { visible: false },
                  bottomTab: {
                    text: 'Screen A',
                  },
                },
                children: [{ component: { name: 'routes.screen-a' } }],
              },
            },
            {
              stack: {
                options: {
                  topBar: { visible: false },
                  bottomTab: {
                    text: 'Screen B',
                  },
                },
                children: [{ component: { name: 'routes.screen-b' } }],
              },
            },
            {
              stack: {
                options: {
                  topBar: { visible: false },
                  bottomTab: {
                    text: 'Screen C',
                  },
                },
                children: [{ component: { name: 'routes.screen-c' } }],
              },
            },
          ],
        },
      },
    });
  });
