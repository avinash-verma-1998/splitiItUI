import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { GroupRoute } from "./Groups/GroupRoute";
const GroupIcon = () => <Icon name="users" size={20} />;
const SpliteeIcon = () => <Icon name="user-o" size={20} />;
const ProfileIcon = () => <Icon name="user" size={20} />;

const AlbumsRoute = () => <Text>hi</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "groups", title: "Groups", focusedIcon: GroupIcon },
    { key: "splitees", title: "Splitees", focusedIcon: SpliteeIcon },
    { key: "history", title: "History", focusedIcon: "history" },
    { key: "profile", title: "Profile", focusedIcon: ProfileIcon },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    groups: GroupRoute,
    splitees: AlbumsRoute,
    history: RecentsRoute,
    profile: NotificationsRoute,
  });

  //   cod

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;
