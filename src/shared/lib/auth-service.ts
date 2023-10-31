import Cookies from 'universal-cookie';
import decode from 'jwt-decode';

const AUTH_TOKEN = 'AUTH_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

class AuthService {
  private cookies: Cookies;

  constructor() {
    this.cookies = new Cookies();
  }

  public get() {
    const authToken = this.cookies.get(AUTH_TOKEN) ?? null;
    const refreshToken = this.cookies.get(REFRESH_TOKEN) ?? null;

    const decoded = authToken
      ? decode<{ id?: string; email?: string; login?: string }>(authToken)
      : {};

    return {
      authToken,
      refreshToken,
      decoded: {
        id: decoded?.id ? Number(decoded?.id) : null,
        email: decoded?.email ?? null,
        login: decoded?.login ?? null,
      },
    };
  }

  public set(jwtAuthToken: string, jwtRefreshToken: string) {
    this.cookies.set(AUTH_TOKEN, jwtAuthToken, {
      secure: !import.meta.env.DEV,
      sameSite: 'lax',
      path: '/',
    });

    this.cookies.set(REFRESH_TOKEN, jwtRefreshToken, {
      secure: !import.meta.env.DEV,
      sameSite: 'lax',
      path: '/',
    });
  }

  public remove() {
    this.cookies.remove(AUTH_TOKEN);
    this.cookies.remove(REFRESH_TOKEN);
  }
}

const authService = new AuthService();
export { authService };
