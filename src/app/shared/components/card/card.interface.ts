export type CardAction = {
  url: string,
  customLabel?: string,
  label?: 'live' | 'github',
}

export interface Card {
  imgSrc?: string;
  tags?: string[];
  title?: string;
  altTitle?: string;
  description?: string;
  actions?: CardAction[];
}
