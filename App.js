import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);
const fetch = require('node-fetch');

const url = 'https://app.ecwid.com/api/v3/83761399/products';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer public_rk68C9yAbGKaiN7D6TNAB3h4r2DFsmQy',
  },
};

const handleButtonClick = () => {
  console.log('you pressed a button');
};

const ecwidAPITest = async () => {
  try {
    const response = await fetch(url, options);
    const json = await response.json;
    console.log(json.items);
    setData(json.items);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  ecwidAPITest();
}, []);

const App = () => {
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.price}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;