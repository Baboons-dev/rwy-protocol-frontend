export interface SliderImage {
  id: number;
  image: string;
  caption: string;
  order: number;
}

export interface Gem {
  id: number;
  participants_count: number;
  slider_images: SliderImage[];
  name: string;
  symbol: string;
  image: string;
  short_description: string;
  description: string;
  sale_details: string;
  sale_details_html: string;
  tokenomics: string;
  tokenomics_html: string;
  amount_raised: string;
  deposit_address: string;
  fundraise_goal: string;
  featured: boolean;
  telegram_link: string;
  whitepaper_link: string;
  twitter_link: string;
  discord_link: string;
  token_price: string;
  max_allocation: string;
  status: 'UPCOMING' | 'ACTIVE' | 'CLOSED';
  sale_start_date: string;
  sale_end_date: string;
  created_at: string;
  updated_at: string;
}