import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { api } from '../../services/api';

interface Character {
  id: number;
  name: string;
  race: string;
  ki: string;
}

export default function CharactersScreen() {
  const { data, isLoading, error } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: () => api.get('/characters').then(res => res.data),
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Erro ao carregar dados</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>Raça: {item.race}</Text>
          <Text style={styles.text}>KI: {item.ki}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'rgba(30,30,30,0.8)',
    borderRadius: 8,
    // Corrigido shadow -> boxShadow:
    boxShadow: '0 2px 4px rgba(255, 215, 0, 0.3)',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  name: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    marginTop: 4,
  },
  error: {
    color: '#FF0000',
    fontSize: 18,
  },
  list: {
    paddingBottom: 20,
  },
});