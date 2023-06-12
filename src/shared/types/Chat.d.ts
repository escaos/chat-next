export interface IChatItem {
  id: string;
  title: string;
  date: number;
}

export interface IChatMessage {
  id: number;
  username: string;
  date: number;
  message: string;
  answer?: boolean;
}
