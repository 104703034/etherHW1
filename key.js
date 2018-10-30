const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString('hex'));
//console.log("test:", privKey.toString('hex'));

// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString('hex'));

// address
let address = wallet.getAddressString();
console.log("address:", address.toString('hex'));


/***** address *****/

// step 2:  public_key_hash = Keccak-256(public_key)
publickeyhash = keccak256(pubKey);

// step 3:  address = ¡¥0x¡¦ + last 20 bytes of public_key_hash
let back = publickeyhash.toString('hex');
let addressA = '0x' + back.slice(-40);

console.log("addressA:", addressA);


/************keystore***************/
var asddd = Wallet.fromPrivateKey(privKey);
asddd.toV3String('nccu');
console.log("!!!", asddd.toV3String('nccu'));