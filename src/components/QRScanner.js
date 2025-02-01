import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function QRScanner({ onScanned }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    if (data) {
      onScanned(data);
    }
  };

  if (hasPermission === null) {
    return <Text>Proszę o przyznanie dostępu do aparatu...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Brak dostępu do aparatu.</Text>;
  }

  return (
    <View>
      <Button title="Zeskanuj kod QR" onPress={() => setScanned(false)} />
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scanner: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
});
