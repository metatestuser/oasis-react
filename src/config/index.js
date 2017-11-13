import network from '../store/reducers/network';

const staticConfig = {
  networks: [
    'kovan',
    'live'
  ],
  "market": {
    "kovan": {
      "address": "0x375d52588c3f39ee7710290237a95C691d8432E7",
      "blockNumber": 3723952
    },
    "live": {
      "address": "0x3aa927a97594c3ab7d7bf0d47c71c3877d1de4a1",
      "blockNumber": 4262057
    }
  },
  "tokens": {
    "kovan": {
      "OW-ETH": "0x856a0c1ad8302896078134e99316b7051e99c688",
      "W-ETH": "0x53eccc9246c1e537d79199d0c7231e425a40f896",
      "DAI": "0x0000000000000000000000000000000000000000",
      "SAI": "0x228bf3d5be3ee4b80718b89b68069b023c32131e",
      "MKR": "0x4bb514a7f83fbb13c2b41448208e89fabbcfe2fb",
      "DGD": "0xbb7697d091a2b9428053e2d42d088fcd2a6a0aaf",
      "GNT": "0xece9fa304cc965b00afc186f5d0281a00d3dbbfd",
      "W-GNT": "0xbd1ceb35769eb44b641c8e257005817183fc2817",
      "REP": "0x99e846cfe0321260e51963a2114bc4008d092e24",
      "ICN": "0x8a55df5de91eceb816bd9263d2e5f35fd516d4d0",
      "1ST": "0x846f258ac72f8a60920d9b613ce9e91f8a7a7b54",
      "SNGLS": "0xf7d57c676ac2bc4997ca5d4d34adc0d072213d29",
      "VSL": "0x2e65483308968f5210167a23bdb46ec94752fe39",
      "PLU": "0x00a0fcaa32b47c4ab4a8fdda6d108e5c1ffd8e4f",
      "MLN": "0xc3ce96164012ed51c9b1e34a9323fdc38c96ad8a",
      "RHOC": "0x7352c20e00d3c89037a8959699741c341771ed59",
      "TIME": "0xd944954588061c969fbd828d1f00c297c3511dbd",
      "GUP": "0xa786d73316e43c3361145241755566e72424274c",
      "BAT": "0x485bd6f93f3cd63d5da117c8205173b542da8e7e",
      "NMR": "0x13ec2f6ab4be5a55800193e7b22e83042405bb64"
    },
    "live": {
      "OW-ETH": "0x0000000000000000000000000000000000000000",
      "W-ETH": "0xecf8f87f810ecf450940c9f60066b4a7a501d6a7",
      "DAI": "0x0000000000000000000000000000000000000000",
      "SAI": "0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4",
      "MKR": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
      "DGD": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
      "GNT": "0xa74476443119a942de498590fe1f2454d7d4ac0d",
      "W-GNT": "0x01afc37f4f85babc47c0e2d0eababc7fb49793c8",
      "REP": "0xe94327d07fc17907b4db788e5adf2ed424addff6",
      "ICN": "0x888666ca69e0f178ded6d75b5726cee99a87d698",
      "1ST": "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",
      "SNGLS": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
      "VSL": "0x5c543e7ae0a1104f78406c340e9c64fd9fce5170",
      "PLU": "0xd8912c10681d8b21fd3742244f44658dba12264e",
      "MLN": "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1",
      "RHOC": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
      "TIME": "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53",
      "GUP": "0xf7b098298f7c69fc14610bf71d5e02c60792894c",
      "BAT": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      "NMR": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671"
    }
  }
};

export default {
  getTokens: (netName) => {
    switch (netName) {
      case 'kovan':
        return staticConfig['tokens']['kovan'];
      case 'live':
        return staticConfig['tokens']['live'];
      default:
        throw Error('Network name not specified')
    }
  }
};