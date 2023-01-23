import { EncryptStorage } from 'encrypt-storage';
const key = "vf-apparel_cart_items";

export const encryptStorage = new EncryptStorage(key, {
  prefix: '@vf-apparel',
});