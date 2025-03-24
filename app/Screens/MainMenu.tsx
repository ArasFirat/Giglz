import { ScrollView, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Search, MapPin, Calendar } from 'lucide-react-native';

interface Artist {
  id: string;
  name: string;
  imageUrl: string;
}

interface Concert {
  id: string;
  artist: string;
  date: string;
  venue: string;
  imageUrl: string;
}

interface Activity {
  id: string;
  username: string;
  action: string;
  time: string;
  userAvatar: string;
}

export default function MainMenu() {
  const popularArtists: Artist[] = [
    { id: '1', name: 'Rammstein', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop' },
    { id: '2', name: 'Duman', imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop' },
    { id: '3', name: 'Tarkan', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
    { id: '4', name: 'Art4', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop' },
  ];

  const justForEmre: Concert[] = [
    {
      id: '1',
      artist: 'Tarkan',
      date: '15 Jan 2024',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '2',
      artist: 'Art4',
      date: '20 Feb 2024',
      venue: 'Tato Bar',
      imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const activities: Activity[] = [
    {
      id: '1',
      username: 'Yılmaz Aktaş',
      action: 'bought a ticket for Art4 concert!',
      time: '2 hours ago',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '2',
      username: 'Utku Dergin',
      action: 'started following Tarkan',
      time: '1 hour ago',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const popularInIzmir: Concert[] = [
    {
      id: '1',
      artist: 'Duman',
      date: '25 Mar 2024',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '2',
      artist: 'Rammstein',
      date: '15 Jan 2025',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '3',
      artist: 'Ceza',
      date: '03 Apr 2024',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '4',
      artist: 'İzmir Jazz Festival',
      date: '10-15 Jul 2024',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const dontMissOut: Concert[] = [
    {
      id: '1',
      artist: 'Tarkan',
      date: '15 Jan 2024',
      venue: 'İzmir Arena',
      imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '2',
      artist: 'Art4',
      date: '20 Feb 2024',
      venue: 'Tato Bar',
      imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.logo}>GigLz</Text>
        <Pressable style={styles.searchButton}>
          <Search color="#fff" size={24} />
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Popular Artists</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.artistsScroll}>
        {popularArtists.map((artist) => (
          <Pressable key={artist.id} style={styles.artistCard}>
            <Image source={{ uri: artist.imageUrl }} style={styles.artistImage} />
            <Text style={styles.artistName}>{artist.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Just for Emre</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.concertsScroll}>
        {justForEmre.map((concert) => (
          <Pressable key={concert.id} style={styles.horizontalConcertCard}>
            <Image source={{ uri: concert.imageUrl }} style={styles.horizontalConcertImage} />
            <View style={styles.horizontalConcertOverlay}>
              <Text style={styles.horizontalConcertArtist}>{concert.artist}</Text>
              <View style={styles.concertDetails}>
                <View style={styles.concertInfo}>
                  <Calendar size={16} color="#FFD700" />
                  <Text style={styles.concertText}>{concert.date}</Text>
                </View>
                <View style={styles.concertInfo}>
                  <MapPin size={16} color="#FFD700" />
                  <Text style={styles.concertText}>{concert.venue}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.activitySection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Friends Activity</Text>
          <Pressable>
            <Text style={styles.seeAll}>→</Text>
          </Pressable>
        </View>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <Image source={{ uri: activity.userAvatar }} style={styles.activityAvatar} />
            <View style={styles.activityContent}>
              <Text style={styles.activityUsername}>{activity.username}</Text>
              <Text style={styles.activityText}>{activity.action}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Popular in İzmir</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
        {popularInIzmir.map((concert) => (
          <Pressable key={concert.id} style={styles.popularCard}>
            <Image source={{ uri: concert.imageUrl }} style={styles.popularImage} />
            <View style={styles.popularContent}>
              <Text style={styles.popularArtist}>{concert.artist}</Text>
              <Text style={styles.popularVenue}>{concert.venue}</Text>
              <Text style={styles.popularDate}>{concert.date}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Don't Miss Out</Text>
      {dontMissOut.map((concert) => (
        <Pressable key={concert.id} style={styles.concertCard}>
          <Image source={{ uri: concert.imageUrl }} style={styles.concertImage} />
          <View style={styles.concertOverlay}>
            <Text style={styles.concertArtist}>{concert.artist}</Text>
            <View style={styles.concertDetails}>
              <View style={styles.concertInfo}>
                <Calendar size={16} color="#FFD700" />
                <Text style={styles.concertText}>{concert.date}</Text>
              </View>
              <View style={styles.concertInfo}>
                <MapPin size={16} color="#FFD700" />
                <Text style={styles.concertText}>{concert.venue}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 20,
    paddingBottom: 15,
  },
  artistsScroll: {
    paddingLeft: 20,
  },
  artistCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  artistImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  concertsScroll: {
    paddingLeft: 20,
  },
  horizontalConcertCard: {
    width: 280,
    height: 160,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  horizontalConcertImage: {
    width: '100%',
    height: '100%',
  },
  horizontalConcertOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  horizontalConcertArtist: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  concertCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
  },
  concertImage: {
    width: '100%',
    height: '100%',
  },
  concertOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  concertArtist: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  concertDetails: {
    flexDirection: 'row',
    gap: 15,
  },
  concertInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  concertText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  activitySection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAll: {
    color: '#FFD700',
    fontSize: 20,
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityUsername: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  activityText: {
    color: '#CCCCCC',
    marginBottom: 2,
  },
  activityTime: {
    color: '#666666',
    fontSize: 12,
  },
  popularScroll: {
    paddingLeft: 20,
  },
  popularCard: {
    width: 200,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  popularImage: {
    width: '100%',
    height: 120,
  },
  popularContent: {
    padding: 12,
  },
  popularArtist: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  popularVenue: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 2,
  },
  popularDate: {
    color: '#FFD700',
    fontSize: 12,
  },
});