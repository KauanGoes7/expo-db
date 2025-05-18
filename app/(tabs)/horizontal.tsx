import { useQuery } from '@tanstack/react-query';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

type Character = {
  id: string;
  name: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
  image?: string;
};

export default function HorizontalScreen() {
  const { data } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: () => fetch('https://web.dragonball-api.com/characters').then(res => res.json()),
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CARDS</Text>
      </View>

      {/* Cards Horizontais */}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.race.toUpperCase()}-{item.gender.toUpperCase()}</Text>
            {item.image && (
              <Image 
                source={{ uri: item.image }} 
                style={styles.characterImage}
                resizeMode="contain"
              />
            )}
            <View style={styles.details}>
              <Text style={styles.text}>BASE KI: {item.ki}</Text>
              <Text style={styles.text}>TOTAL KI: {item.maxKi}</Text>
              <Text style={styles.text}>AFFILIATION: {item.affiliation}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Image 
          source={require('../../assets/images/goku.png')}
          style={styles.footerIcon}
        />
        <Image 
          source={require('../../assets/images/vegeta_icon.png')}
          style={styles.footerIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
  },
  headerText: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: 250,
    margin: 15,
    padding: 15,
    backgroundColor: 'rgba(30,30,30,0.9)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  characterImage: {
    width: '100%',
    height: 120,
    marginBottom: 15,
  },
  details: {
    marginTop: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#FFD700',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  footerIcon: {
    width: 50,
    height: 50,
  },
  listContainer: {
    paddingVertical: 20,
  },
});