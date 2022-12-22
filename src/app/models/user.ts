export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  adresse: adresse;
  telephone: string;
  mdp: string;
  birthdate: string;
  genre: string;
  abonnement: string;
  club: string;
  newsletter: boolean;
  entrainement: boolean;
}

interface adresse {
  adresse: string;
  city: string;
  cdp: string;
  pays: string;
  complementary: string;
}

export interface userConnexion {
  email: string;
  token?: string;
}
