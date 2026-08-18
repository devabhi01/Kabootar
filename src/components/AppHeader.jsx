import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import { useTheme } from '../theme';


const AppHeader = ({ title, menuItems = [] }) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  const handleMenuPress = item => {
    setVisible(false);

    if (item.onPress) {
      item.onPress();
    }
  };

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.LeftContent}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        </View>

        <TouchableOpacity
          style={styles.RightContent}
          onPress={() => setVisible(true)}
          activeOpacity={0.7}
        >
          <Image
            style={[styles.threedots, { tintColor: colors.text }]}
            source={require('../assets/icons/threedot.png')}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <Pressable
            style={[
              styles.modal,
              {
                backgroundColor: colors.background,
              },
            ]}
            onPress={e => e.stopPropagation()}
          >
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuPress(item)}
              >
                <Text style={[styles.menuText, { color: colors.text }]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  LeftContent: {
    justifyContent: 'center',
  },

  RightContent: {
    justifyContent: 'center',
    padding: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
  },

  threedots: {
    width: 24,
    height: 24,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  modal: {
    position: 'absolute',
    top: 55,
    right: 15,
    minWidth: 180,
    borderRadius: 10,
    paddingVertical: 6,

    elevation: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  menuItem: {
    paddingHorizontal: 18,
    paddingVertical: 13,
  },

  menuText: {
    fontSize: 16,
  },
});

export default AppHeader;
