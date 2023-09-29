import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,00',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '350,00',
    date: '17/09/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '17/09/2022',
    type: 1
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <Balance saldo='23.567,00' gastos='-4.244,00' />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
