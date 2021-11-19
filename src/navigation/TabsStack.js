import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'

import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator();

function TabsStack() {
  const { t } = useTranslation('tabs')
  return (
    <Tab.Navigator screenOptions={TabsStyle} initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        // options={({ route }) => ({
        //   tabBarIcon: props => <BottomTab_1 {...props} />,
        //   tabBarLabel: props => <BottomTabLabel title={t('tab_1')} {...props} />
        // })}
      />
    </Tab.Navigator>
  );
}

export default TabsStack;
