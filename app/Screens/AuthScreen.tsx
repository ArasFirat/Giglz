import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';
import { Music2 } from 'lucide-react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
    <ImageBackground
    //   source={{ uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop' }} 
      style={styles.container}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)', '#1C1C1C']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Music2 size={32} color="#1C1C1C" strokeWidth={2.5} />
            </View>
            <Text style={styles.logoText}>GigLz</Text>
          </View>

          <Text style={styles.tagline}>
            The Pulse of Your City's{'\n'}Live Music
          </Text>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign up Free</Text>
            </Pressable>

            <Pressable style={styles.guestButton}>
              <Text style={styles.guestText}>Continue as a Guest</Text>
            </Pressable>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <Pressable style={styles.socialButton}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' }}
                style={[styles.socialIcon, { tintColor: '#1DB954' }]}
              />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
                style={styles.socialIcon}
              />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg' }}
                style={[styles.socialIcon, { tintColor: '#FFFFFF' }]}
              />
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already Signed up?</Text>
            {/* <Link href="/login" style={styles.loginLink}>
              <Text style={styles.loginText}>Log in</Text>
            </Link> */}
            <Text style={styles.termsText}>
              By proceeding, you agree with Giglz's{' '}
              <Text style={styles.linkText}>Terms of Service</Text> and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 56,
    height: 56,
    backgroundColor: '#FFD700',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 36,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 32,
  },
  signUpButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signUpText: {
    color: '#1C1C1C',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  guestButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  guestText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 48,
  },
  socialButton: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  loginLink: {
    marginBottom: 24,
  },
  loginText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});