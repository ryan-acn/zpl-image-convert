const zplImageConvert = require('../src/index.js');

test('Convert image to Z64 ZPL', async () => {
  const zpl = await zplImageConvert.encode('./test/test-image.png', {
    method: 'Z64',
  });

  expect(zpl).toBe(`^GFA,2850,2850,19,:Z64:eJzV1j1u2zAUAOBH0xA9GKaBLgrgWM7eQUCHejAsp72IgiwdXXTJEERKUjSb0wMEPQuDDu3QQ6g3UJZCQQ2rj5T4J/UCERBL+CyL7z2RjwF4+QevRZeiuurToU913qeiT92HIe37VP+H8j6JPhV9KvvUiYLXfhS8VHRILIUzRe5PU9oQzA1tSM7VPcxQDoKrIEhuKeVN9DoB/C6WlEci1UTKUBIUsaHb8QjpQGG60HQzGCLtAwg1wQ2RVI1cgi8RZFXs0Ht4VwArN/ZZcArnALQUYEaEk/w1fpYYsaGpiPFzi3mZ8ofNtznNDY2PVLpibtMOuDqdFdQUh3xWpwQmttIf2vPKUtyenXfUhsMdasZmzuTUYzukx84sDVpL7KwbthRZGiGNfZoaMjnKWkriljZ90hd2uZG7dppGli6BqxuPDVG82PoU4J8q3szQWGe+MjSSH7JkS0Oh9q1ZM1P9wMKQqrx8mDC0MFkZSvXPiaGNHtdSM/IA0+gQkW/NJyyRIf0WN1gvTTsdS5RputdJrDN716SJosrssxQNcQZ0SCYkDAVNrMShNlbaJ2aqasi+WnO3nSbm7qxPttHpFXeraOnS3XMtyygv9dq4v67lhHIpl3c0szo0hPM+U3NtpIkhNX1trGk+xMzVCgl0QldyQNX8aANEPoo1rVqVAkvDGxI6IwIDbEWCtX05VTQE9nXL2x4fKwqBPVzO2h4cKsLm9LCO23YrXxBhecF3yXm7UCgOSVdU8Mnxj6ytXiUbQpRHfB7onhxh92U1JHyuk8M0MKK9JF0VdbASrrqUw4FPPAqA7O99GsDt865D9O73t8nMJco5ffCJ1ECXc58OwOKZR9j1GHSohAkJfUqDCXV7Jh6LyaxL8WzJ4MKj8GLbpahKeYc+4ZYIlx49FhDB2hWGu9caEpeiQuDU4e7mnTxhWVfM3byzv/hW/lB388YGzevvUPkUwqMXRfaUb+E0d6NIxKaAVLz1gjgRsNi8caLg1SvccxdnDrE9blDTj9cO0RrpqCYOkXonZxlxk6x/SaIuJT+RDgOvFJVcHIFHpSTvHyCGRaCH1CUiS+W/jhd5/AM00G7b:a5ca^FS`);
});

test('Convert image to ASCII ZPL', async () => {
  const zpl = await zplImageConvert.encode('./test/test-image.png', {
    method: 'ASCII',
  });

  expect(zpl).toBe(`^GFA,2850,2850,19,,:::::::::S0IFC,R01JF8,R01JFE,R01KF8,R01KFE,R01LF8,R01LFC,R01MF,R01MF8,R01MFC,R01MFE,R01NF,R01NF8,S0NFC,M0HFJ0NFE3F,L0181CI0RF8,L06H03I0OFH01E,L04H018H0NF8I07,L08I0CH0NFJ018,L08I06H0MFCK0C,K018I03H0MF801FC06,K0101F0180MFH0E0306,K01830C080LFE03H0102,K018202040LFC06H0182,L08201040LF808H0182,L082H0861FH07HF83I0182,L043H042EJ07F04I0102,L041H063K03F0CI0306,L021802CL0F08I0606,L010C03M0708I0C0C,L018606O08H0380C,M0C198O0C01E018,M060FP061EH03,M0184P03FI0E,N068T03C,N03U0FC,N06T0HFC,N0CR07IFE,M018S0IFE,M03T07HFE,M0203R03IF,M0403R01IF,M0803K0CL01IF,L01H03K0CL01IF8,L02N0CM0IF8,L04N0CM0IF8,L08V0IFC,K0187IFQ01IFC,K017CI0F8O01DHFC,K03CK07O01DHFC,K06M0EN01CHFC,K0CM018M03CHFC,K08N06M038HFC,J018O08L070HFE,J01P06L0E0HFE,J03P018K0C0HFE,J02Q04M0HFE,J06Q01L01HFE,J04R08K01HFE,J0CR02K03HFE,J0CR01K07HFE,J0CS08J07HFE,I018S04J0IFE,I018ER02I01F7FE,I018FR01I03E7FE,I018EI0EO08H0F87FE,I018J0EO04J07FE,I018J0ET0HFC,I018J06O02I01HFC,I018T01I03HFC,I018T01I07HFC,J08T01I0IFC,J0CT01801IF8,J0CU0807IF8,J0CU080JF8,J06U083JF8K038,J06U087F9HFK03HF,J03U08F81HFK0IF,J03U08H03HFJ03IF,J018T08H03FEJ07JF,K08T08H07FEJ0KF8,K0CT0801E04I01IFE,K06S01H07EK03IF8,K03O01I0103FEK07JF,K018N01I030HFEK07JFC,L0CN01I020KFCH07JFE,L06N01I04I07907H0KF,L03N01H018I079C7C1CIFC,L018M01H0EJ079C3E30IF8,M0EM010780EH0F8E3F63IF,M038L0H3C03CH0F0E1DCH7FC,N0F8K0HFC1F801F0F1E061E,N01FCH0IF07HFH03F0F1E0C,O03JFCH07FCH03F0F1E18,W07FI07E0F1E18,W078I0FE0F0E18,W06I01FC8F0E18,W02H083F98E0E18,W020387E19E0E1C,W030F0F039C0E1C,W01HFI0H381E1C,W01FEI07301C1C,X0FCI07H01C1C,X0FJ0E0H181C,X06H060E03H03C,X02H0E1C03H03C,X0301C3807H078,X018787H07H078,X01HF86H0FH078,X073FJ0FH07C,X0C1EI01FH03E,W07C06I03EH03F,V01FE0CI07EI0F8,V03HF18I0FE3C07C,V07HFBI03IF603E,V07HFEI0IFC3H0F8,V07HFEH018H0C1H07C,V07HF1807I041803E,V03FC040EI060C037,V01FE021CI02040H38,W0HF8138I03020618,W07FC0FJ01071818,W03HF0FJ019HF018,W01HF8EK0HFC01,X0HFHCK0HFC03,X03FC8K0HFE02,X01HF8K07HF06,X01HFL07IFC,Y07EL03FE6,Y01CM078,,:::::::::^FS`);
});

test('Convert Z64 ZPL to image', async () => {
  const zpl = `^GFA,2850,2850,19,:Z64:eJzV1j1u2zAUAOBH0xA9GKaBLgrgWM7eQUCHejAsp72IgiwdXXTJEERKUjSb0wMEPQuDDu3QQ6g3UJZCQQ2rj5T4J/UCERBL+CyL7z2RjwF4+QevRZeiuurToU913qeiT92HIe37VP+H8j6JPhV9KvvUiYLXfhS8VHRILIUzRe5PU9oQzA1tSM7VPcxQDoKrIEhuKeVN9DoB/C6WlEci1UTKUBIUsaHb8QjpQGG60HQzGCLtAwg1wQ2RVI1cgi8RZFXs0Ht4VwArN/ZZcArnALQUYEaEk/w1fpYYsaGpiPFzi3mZ8ofNtznNDY2PVLpibtMOuDqdFdQUh3xWpwQmttIf2vPKUtyenXfUhsMdasZmzuTUYzukx84sDVpL7KwbthRZGiGNfZoaMjnKWkriljZ90hd2uZG7dppGli6BqxuPDVG82PoU4J8q3szQWGe+MjSSH7JkS0Oh9q1ZM1P9wMKQqrx8mDC0MFkZSvXPiaGNHtdSM/IA0+gQkW/NJyyRIf0WN1gvTTsdS5RputdJrDN716SJosrssxQNcQZ0SCYkDAVNrMShNlbaJ2aqasi+WnO3nSbm7qxPttHpFXeraOnS3XMtyygv9dq4v67lhHIpl3c0szo0hPM+U3NtpIkhNX1trGk+xMzVCgl0QldyQNX8aANEPoo1rVqVAkvDGxI6IwIDbEWCtX05VTQE9nXL2x4fKwqBPVzO2h4cKsLm9LCO23YrXxBhecF3yXm7UCgOSVdU8Mnxj6ytXiUbQpRHfB7onhxh92U1JHyuk8M0MKK9JF0VdbASrrqUw4FPPAqA7O99GsDt865D9O73t8nMJco5ffCJ1ECXc58OwOKZR9j1GHSohAkJfUqDCXV7Jh6LyaxL8WzJ4MKj8GLbpahKeYc+4ZYIlx49FhDB2hWGu9caEpeiQuDU4e7mnTxhWVfM3byzv/hW/lB388YGzevvUPkUwqMXRfaUb+E0d6NIxKaAVLz1gjgRsNi8caLg1SvccxdnDrE9blDTj9cO0RrpqCYOkXonZxlxk6x/SaIuJT+RDgOvFJVcHIFHpSTvHyCGRaCH1CUiS+W/jhd5/AM00G7b:a5ca^FS`;
  
  const image = await zplImageConvert.decode(zpl);

  expect(image.width).toBe(152);
  expect(image.height).toBe(150);
  expect(image.buffer.length).toBe(2850);
});

test('Convert ASCII ZPL to image', async () => {
  const zpl = `^GFA,2850,2850,19,,:::::::::S0IFC,R01JF8,R01JFE,R01KF8,R01KFE,R01LF8,R01LFC,R01MF,R01MF8,R01MFC,R01MFE,R01NF,R01NF8,S0NFC,M0HFJ0NFE3F,L0181CI0RF8,L06H03I0OFH01E,L04H018H0NF8I07,L08I0CH0NFJ018,L08I06H0MFCK0C,K018I03H0MF801FC06,K0101F0180MFH0E0306,K01830C080LFE03H0102,K018202040LFC06H0182,L08201040LF808H0182,L082H0861FH07HF83I0182,L043H042EJ07F04I0102,L041H063K03F0CI0306,L021802CL0F08I0606,L010C03M0708I0C0C,L018606O08H0380C,M0C198O0C01E018,M060FP061EH03,M0184P03FI0E,N068T03C,N03U0FC,N06T0HFC,N0CR07IFE,M018S0IFE,M03T07HFE,M0203R03IF,M0403R01IF,M0803K0CL01IF,L01H03K0CL01IF8,L02N0CM0IF8,L04N0CM0IF8,L08V0IFC,K0187IFQ01IFC,K017CI0F8O01DHFC,K03CK07O01DHFC,K06M0EN01CHFC,K0CM018M03CHFC,K08N06M038HFC,J018O08L070HFE,J01P06L0E0HFE,J03P018K0C0HFE,J02Q04M0HFE,J06Q01L01HFE,J04R08K01HFE,J0CR02K03HFE,J0CR01K07HFE,J0CS08J07HFE,I018S04J0IFE,I018ER02I01F7FE,I018FR01I03E7FE,I018EI0EO08H0F87FE,I018J0EO04J07FE,I018J0ET0HFC,I018J06O02I01HFC,I018T01I03HFC,I018T01I07HFC,J08T01I0IFC,J0CT01801IF8,J0CU0807IF8,J0CU080JF8,J06U083JF8K038,J06U087F9HFK03HF,J03U08F81HFK0IF,J03U08H03HFJ03IF,J018T08H03FEJ07JF,K08T08H07FEJ0KF8,K0CT0801E04I01IFE,K06S01H07EK03IF8,K03O01I0103FEK07JF,K018N01I030HFEK07JFC,L0CN01I020KFCH07JFE,L06N01I04I07907H0KF,L03N01H018I079C7C1CIFC,L018M01H0EJ079C3E30IF8,M0EM010780EH0F8E3F63IF,M038L0H3C03CH0F0E1DCH7FC,N0F8K0HFC1F801F0F1E061E,N01FCH0IF07HFH03F0F1E0C,O03JFCH07FCH03F0F1E18,W07FI07E0F1E18,W078I0FE0F0E18,W06I01FC8F0E18,W02H083F98E0E18,W020387E19E0E1C,W030F0F039C0E1C,W01HFI0H381E1C,W01FEI07301C1C,X0FCI07H01C1C,X0FJ0E0H181C,X06H060E03H03C,X02H0E1C03H03C,X0301C3807H078,X018787H07H078,X01HF86H0FH078,X073FJ0FH07C,X0C1EI01FH03E,W07C06I03EH03F,V01FE0CI07EI0F8,V03HF18I0FE3C07C,V07HFBI03IF603E,V07HFEI0IFC3H0F8,V07HFEH018H0C1H07C,V07HF1807I041803E,V03FC040EI060C037,V01FE021CI02040H38,W0HF8138I03020618,W07FC0FJ01071818,W03HF0FJ019HF018,W01HF8EK0HFC01,X0HFHCK0HFC03,X03FC8K0HFE02,X01HF8K07HF06,X01HFL07IFC,Y07EL03FE6,Y01CM078,,:::::::::^FS`;

  const image = await zplImageConvert.decode(zpl);

  expect(image.width).toBe(152);
  expect(image.height).toBe(150);
  expect(image.buffer.length).toBe(2850);
});