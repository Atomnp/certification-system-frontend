import React from "react";
import { View,ActivityIndicator } from "react-native";

export const Loader = () => {
    const styles = {
        spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        
        
         }
         };
  return (
    <div >
         <View style = {styles.spinnerStyle}>
  <ActivityIndicator size={ 'large'} />
  </View>
     
    </div>
  );
};
