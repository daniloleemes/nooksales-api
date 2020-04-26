import Hashids from 'hashids/cjs'

const HASHID_MIN_LENGTH = 6
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz1234567890'
export const hashids = new Hashids('nooksales', HASHID_MIN_LENGTH, ALPHABET)