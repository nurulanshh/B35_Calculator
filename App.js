import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState("");

  
  let count = "";

  // console.log(eval("1 + 1"))
  function getResult()  {
    for (let i = 0; i < keys.length; i++ ) {
      count = count + keys[i]
    };

    const math = eval(count);
    setResult("=" + math);
  }

  function persen() {
    setResult(count * 1 / 100);
}

  function setDel() {
    setKeys([]),
    setResult(),
    count= ""
  }

  console.log(keys)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container_title}>
      <Text style={styles.title}>Display</Text>
      </View>

      <View style={styles.container_output}>
        <Text style={styles.output}>{keys}{result}</Text>
      </View>

      <View style={styles.bottom}>

        <View style={styles.container_keys_clear}>

          <TouchableOpacity>
          <Text style={styles.keys_clear} onPress={() => setDel()}>CLEAR</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container_keys}>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "1"])}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "2"])}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => setKeys([...keys, "-"])}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => setKeys([...keys, "+"])}>+</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container_keys}>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "3"])}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "4"])}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => setKeys([...keys, "/"])}>/</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => setKeys([...keys, "*"])}>*</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container_keys}>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "5"])}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "6"])}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => setKeys([...keys, ("%", persen)])}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys_math} onPress={() => getResult()}>=</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container_keys}>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "7"])}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "8"])}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "9"])}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.keys} onPress={() => setKeys([...keys, "0"])}>0</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    alignItems: 'center',
  },

  container_title: {
    display:"block",
    marginLeft:"-250px",
    marginBottom: "10px",
    marginTop: "30px"
  },

  title: {
  
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff"
  },

  keys: {
    display:"flex",
    width: "80px",
    height: "80px",
    backgroundColor:"#FF5757",
    fontSize:"50px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"10px",
    marginTop: "10px",
    marginVertical: "10px",
    marginHorizontal: "5px"
  },

  keys_math: {
    display:"flex",
    width: "80px",
    height: "80px",
    backgroundColor:"#930707",
    fontSize:"50px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"10px",
    marginVertical: "10px",
    marginHorizontal: "5px"
  },

  keys_clear: {
    display:"flex",
    width: "170px",
    height: "70px",
    backgroundColor:"#930707",
    fontSize:"25px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"10px",
    padding: "20px 0px 20px 20px"
  },

  container_keys: {
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row",
  },
  container_keys_clear: {
    display:"flex",
    justifyContent:"center",
    flexDirection: "row",
    marginRight:"-180px"
  },
  container_output: {
    backgroundColor: "#ECECEC",
    width: "370px",
    minHeight:"90px",
    borderRadius: "10px",
    padding: "13px",
  },
  output:{
    fontSize:"50px"
  },
  bottom: {
    marginTop:"10px"
  }
});