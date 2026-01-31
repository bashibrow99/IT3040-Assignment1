import { test, expect, type Page } from '@playwright/test';

// ==========================================
// CONFIGURATION & SETUP
// ==========================================

// 1. Singlish Input (Text Area)
const INPUT_SELECTOR: string = 'textarea[placeholder="Input Your Singlish Text Here."]'; 

// 2. Sinhala Output (Specific Div)
const OUTPUT_SELECTOR: string = 'div.w-full.h-80.whitespace-pre-wrap'; 

test.beforeEach(async ({ page }) => {
  // log in website before each test
  await page.goto('https://www.swifttranslator.com/'); 
});

test.describe('Assignment 1: Singlish to Sinhala Automation', () => {

  // Helper function with TypeScript Types
  async function verifyAndLog(page: Page, testID: string, input: string, expectedSnippet: string) {
    // 1. Input fill
    await page.locator(INPUT_SELECTOR).fill(input);
    
    // 2. Wait for real-time update 
    // (Increased to 1.5s to be safer against network lag)
    await page.waitForTimeout(1500); 

    // 3. Get Actual Output
    const actualOutput = await page.locator(OUTPUT_SELECTOR).innerText();

    // 4. Log to Console (Copy this to Excel)
    console.log(`\n[${testID}]`);
    console.log(`Input: ${input}`);
    console.log(`Expected (Contains): ${expectedSnippet}`);
    console.log(`Actual Output: ${actualOutput}`);
    console.log('------------------------------------------------');

    // 5. Assertion
    await expect(page.locator(OUTPUT_SELECTOR)).toContainText(expectedSnippet);
  }

  // ==========================================
  // 1. POSITIVE FUNCTIONAL TEST CASES
  // ==========================================
  
  test('Pos_Fun_0001: Simple Sentence', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0001', 'mata bath tikak oonee.', 'මට බත් ටිකක් ඕනේ.');
  });

  test('Pos_Fun_0002: Greeting', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0002', 'kohomadha oyaata?', 'කොහොමද ඔයාට?');
  });

  test('Pos_Fun_0003: Imperative Command', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0003', 'ikmanata enna.', 'ඉක්මනට එන්න.');
  });

  test('Pos_Fun_0004: Future Tense', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0004', 'api heta ennam.', 'අපි හෙට එන්නම්.');
  });

  test('Pos_Fun_0005: Negative Form', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0005', 'mama dhannee nae.', 'මම දන්නේ නැ.');
  });

  test('Pos_Fun_0006: Response', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0006', 'ov, eeka hari.', 'ඔව්, ඒක හරි.');
  });

  test('Pos_Fun_0007: Informal Command', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0007', 'eeyi, ooka dhiyan.', 'ඒයි, ඕක දියන්.');
  });

  test('Pos_Fun_0008: Multi-word', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0008', 'poddak inna.', 'පොඩ්ඩක් ඉන්න.');
  });

  test('Pos_Fun_0009: Compound Sentence', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0009', 
      'mama gedhara yanna hadhannee, eeth vahina nisaa dhaenma yanna baee vagee.', 
      'මම ගෙදර යන්න හදන්නේ, ඒත් වහින නිසා දැන්ම යන්න බෑ වගේ.');
  });

  test('Pos_Fun_0010: Polite Request', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0010', 
      'anee mata podi udhavvak karanna puLuvandha? loku dheyak.', 
      'අනේ මට පොඩි උදව්වක් කරන්න පුළුවන්ද? ලොකු දෙයක්.');
  });

  test('Pos_Fun_0011: Mixed English', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0011', 
      'nimaali adha office enna late venavaa, mokadha paara hariyata traffic nisaa.', 
      'නිමාලි අද office එන්න late වෙනවා, මොකද පාර හරියට traffic නිසා.');
  });

  test('Pos_Fun_0012: Technical Terms', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0012', 
      'puLuvannam documents tika attach karalaa mata email ekak dhaanna.', 
      'පුළුවන්නම් documents ටික attach කරලා මට email එකක් දාන්න.');
  });

  test('Pos_Fun_0013: Complex Sentence', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0013', 
      'oyaa enavaanam mama balan innam. vaessa unath apita yanna venavaanee.', 
      'ඔයා එනවානම් මම බලන් ඉන්නම්. වැස්ස උනත් අපිට යන්න වෙනවානේ.');
  });

  test('Pos_Fun_0014: Future Tense Long', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0014', 
      'api iiLaGa sathiyee gedhara gihin, iita passee film ekak balanna yamu.', 
      'අපි ඊළඟ සතියේ ගෙදර ගිහින්, ඊට පස්සේ film එකක් බලන්න යමු.');
  });

  test('Pos_Fun_0015: Social Media Terms', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0015', 
      'mata Teams meeting ekee link eka WhatsApp karanna puLuvandha?', 
      'මට Teams meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද?');
  });

  test('Pos_Fun_0016: Past Tense', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0016', 
      'mama iiyee gedhara gihin, iita passee api naetum panthi giyaa.', 
      'මම ඊයේ ගෙදර ගිහින්, ඊට පස්සේ අපි නැටුම් පන්ති ගියා.');
  });

  test('Pos_Fun_0017: Paragraph', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0017', 
      'suLi kuNaatuva nisaa aethi vuu gQQvathuren saha naayayaeemvalin maarga sQQvarDhana aDhikaariyata ayath paaraval 430k vinaasha velaa thiyenavaa. mee paaravalvala sampuurNa dhiga kiloomiitar 300k vithara venavaa kiyalaa pravaahana, mahaamaarga saha naagarika saQQvarDhana aemathi bimal rathnaayaka mahathaa paevasuvaa.', 
      'සුළි කුණාටුව නිසා ඇති වූ ගංවතුරෙන් සහ නායයෑම්වලින් මාර්ග සංවර්ධන අධිකාරියට අයත් පාරවල් 430ක් විනාශ වෙලා තියෙනවා. මේ පාරවල්වල සම්පූර්ණ දිග කිලෝමීටර් 300ක් විතර වෙනවා කියලා ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන ඇමති බිමල් රත්නායක මහතා පැවසුවා.');
  });

  test('Pos_Fun_0018: Multi-sentence', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0018', 
      'mama gedhara yanavaa. oyaa enavaadha maath ekka yanna? api passee kathaa karamu. December 25 nisaa traffic vaediyi.  api trip eka Kandy yamudha? kuNaatuva nisaa paaraval saeehenna vinaasha velaa kiyalaa thamayi aaraQQchiya.', 
      'මම  ගෙදර යනවා. ඔයා එනවාද මාත් එක්ක යන්න? අපි පස්සේ  කතා කරමු. December  25 නිසා  traffic වැඩියි. අපි trip එක Kandy යමුද? කුණාටුව නිසා පාරවල් සෑහෙන්න විනාශ වෙලා කියලා තමයි ආරංචිය.');
  });

  test('Pos_Fun_0019: Tech List', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0019', 
      'ID, NIC, SMS, MMS,  App URL, okkoma check karanna oonee. Zoom meeting ekak thiyenavaa. Documents tika attach karalaa mata email ekak evanna. Teams meeting ekee link eka WhatsApp karanna puLuvandha?', 
      '  ID, NIC, SMS, MMS, App URL,  ඔක්කොම check කරන්න  ඕනේ. Zoom meeting  එකක් තියෙනවා. Documents ටික attach කරලා මට email එකක් එවන්න. Teams meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද?');
  });

  test('Pos_Fun_0020: Mixed Format', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0020', 
      'Rs. 5343k  December 25 venidhaa USD 1500kuth ekka udhee 7.30ta geenna. 25/12/2025 saha 2026-05-21 dhavasvala vaeda thiyenavaa. kg, ml, cm, hariyatama maninna oonee. mama gedhara yanavaa. oyaa enavaadha maath ekka yanna? meeka nam godak vaediyi vagee mata hithenavaa.', 
      'Rs. 5343ක් December 25 වෙනිදා USD 1500කුත් එක්ක උදේ 7.30ට ගේන්න. 25/12/2025 සහ 2026-05-21 දවස්වල වැඩ තියෙනවා. kg, ml, cm, හරියටම මනින්න ඕනේ. මම ගෙදර යනවා. ඔයා එනවාද මාත් එක්ක යන්න? මේක නම් ගොඩක් වැඩියි වගේ මට හිතෙනවා.');
  });

  test('Pos_Fun_0021: Conversations', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0021', 
      'suba udhaeesanak! kohomadha ithin? mata podi udhavvak karanna puLuvandha? karuNaakaralaa meeka poddak balanna. ov, eeka hari. naee, mata eeka karaganna puLuvan. oyaata puLuvannam karuNaakaralaa eyaava yavanna..', 
      'සුබ උදෑසනක්! කොහොමද ඉතින්? මට පොඩි උදව්වක් කරන්න පුළුවන්ද? කරුණාකරලා මේක පොඩ්ඩක් බලන්න. ඔව්, ඒක හරි. නෑ, මට ඒක කරගන්න පුළුවන්. ඔයාට පුළුවන්නම් කරුණාකරලා එයාව යවන්න.');
  });

  test('Pos_Fun_0022: Grammar Flow', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0022', 
      'api iiye naetum panthi giyaa. mama dhaen vaeda karanavaa. mama heta enavaa naetum panthi. api iilaga sathiyee aevidhinna yamu. mama yannayi hadhannee. oyaa enavadha? api yamu. oyaalath enavadha?  ', 
      'අපි ඊයෙ නැටුම් පන්ති ගියා. මම දැන් වැඩ කරනවා. මම හෙට එනවා නැටුම් පන්ති. අපි ඊලග සතියේ ඇවිදින්න යමු. මම යන්නයි හදන්නේ. ඔයා එනවද? අපි යමු. ඔයාලත් එනවද?  ');
  });

  test('Pos_Fun_0023: Complex Forms', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0023', 
      'mama gedhara yanavaa, haebayi vahina nisaa dhanma yanne naa. ethakam  api kaema kanna yanavaa, passe film ekakuth balanavaa. oyaa gihin enna. mama oyaa enakam  balaagena innavaa. vaessa unath apita yanna venavaanee. mulin oyaagee vaeda tika karagena enna.', 
      'මම ගෙදර යනවා, හැබයි වහින නිසා දන්ම යන්නෙ නා. එතකම්  අපි කැම කන්න යනවා, පස්සෙ film එකකුත් බලනවා. ඔයා ගිහින් එන්න. මම ඔයා එනකම්  බලාගෙන ඉන්නවා. වැස්ස උනත් අපිට යන්න වෙනවානේ. මුලින් ඔයාගේ වැඩ ටික කරගෙන එන්න.');
  });

  test('Pos_Fun_0024: Emphasis Paragraph', async ({ page }) => {
    await verifyAndLog(page, 'Pos_Fun_0024', 
      'hari hari, eka eka tika tika chutta chutta vaedi venavaa vaessa. mata nidhimathayi, podi bayakuth hithenavaa. dhaen vahinavaa. mama gedhara innee. api passee kathaa karamu.', 
      'හරි හරි, එක එක ටික ටික චුට්ට චුට්ට වැඩි වෙනවා වැස්ස. මට නිදිමතයි, පොඩි බයකුත් හිතෙනවා. දැන් වහිනවා. මම ගෙදර ඉන්නේ. අපි පස්සේ කතා කරමු.');
  });


  // ==========================================
  // 2. NEGATIVE FUNCTIONAL TEST CASES
  // ==========================================

  test('Neg_Fun_0001: Mixed Tech Terms Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0001', 'mama Python coding igena gannavaaa.', 'මම Python coding ඉගෙන ගන්නවා.');
  });

  test('Neg_Fun_0002: Email Address Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0002', 'mage email eka info@sliit.lk', 'මගේ email එක info@sliit.lk');
  });

  test('Neg_Fun_0003: All Uppercase Input Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0003', 'MATA GEDHARA YANNA OONE', 'මට ගෙදර යන්න ඕනේ');
  });

  test('Neg_Fun_0004: English Slang / Words Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0004', 'api shape eke yamu.', 'අපි shape එකේ යමු.');
  });

  test('Neg_Fun_0005: File Extensions Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0005', 'me assignment.pdf eka ewanna.', 'මේ assignment.pdf එක එවන්න.');
  });

  test('Neg_Fun_0006: English Possessive Form Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0006', "kasun's phone eka ko?", "කසුන්ගේ phone එක කෝ?");
  });

  test('Neg_Fun_0007: Ordinal Numbers Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0007', 'mama 2nd floor ekee innee.', 'මම 2nd floor එකේ ඉන්නේ.');
  });

  test('Neg_Fun_0008: Missing Space (Joined Words) Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0008', 'matabadaginiyi', 'මට බඩගිනියි');
  });

  test('Neg_Fun_0009: Programming Syntax Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0009', 'print("Hello World") kiyala type karanna.', 'print("Hello World") කියලා type කරන්න.');
  });

  test('Neg_Fun_0010: URL / Web Address Failure', async ({ page }) => {
    await verifyAndLog(page, 'Neg_Fun_0010', 'google.com walata gihin balanna.', 'google.com වලට ගිහින් බලන්න.');
  });


  // ==========================================
  // 3. UI TEST CASES
  // ==========================================

  test('Pos_UI_0001: Real-time update check', async ({ page }) => {
    console.log('\n[Pos_UI_0001] Running Real-time update check...');
    await page.locator(INPUT_SELECTOR).pressSequentially('api yanavaa', { delay: 50 });
    
    // Wait for update
    await page.waitForTimeout(1000);

    const actualOutput = await page.locator(OUTPUT_SELECTOR).innerText();
    console.log(`Input: api yanavaa (typed sequentially)`);
    console.log(`Actual Output: ${actualOutput}`);
    console.log('------------------------------------------------');
    
    await expect(page.locator(OUTPUT_SELECTOR)).toContainText('අපි යනවා');
  });

  test('Neg_UI_0001: Clear input test', async ({ page }) => {
    console.log('\n[Neg_UI_0001] Running Clear input test...');
    await page.locator(INPUT_SELECTOR).fill('Testing Clear');
    
    // Clear the input
    await page.locator(INPUT_SELECTOR).clear();
    
    // Wait for the clear to reflect
    await page.waitForTimeout(1000);

    const actualOutput = await page.locator(OUTPUT_SELECTOR).innerText();
    console.log(`Input: [CLEARED]`);
    console.log(`Actual Output: '${actualOutput}' (Should be empty)`);
    console.log('------------------------------------------------');
    
    await expect(page.locator(OUTPUT_SELECTOR)).toBeEmpty();
  });

});