import VehicleDataPage from './VehicleDataPage';
import InsurantDataPage from './InsurantDataPage';
import ProductDataPage from './ProductDataPage';
import PriceOptionPage from './PriceOptionPage';
import SendQuotePage from './SendQuotePage';

describe('Filling vehicle forms', () => {
    const vehicleDataPage = new VehicleDataPage();
    const insurantDataPage = new InsurantDataPage();
    const productDataPage = new ProductDataPage();
    const priceOptionPage = new PriceOptionPage();
    const sendQuotePage = new SendQuotePage();

    it('should fill the vehicle form correctly', () => {
        vehicleDataPage.visit();

        // Filling Vehicle Data
        vehicleDataPage.selectMake("Mercedes Benz");
        vehicleDataPage.selectModel("Moped");
        vehicleDataPage.fillEngineDetails("50", "270");
        vehicleDataPage.selectManufactureDate();
        vehicleDataPage.selectNumberOfSeats('2');
        vehicleDataPage.chooseRightHandDrive("Yes");
        vehicleDataPage.selectFuelType('Gas');
        vehicleDataPage.fillPayloadDetails("100", "120");
        vehicleDataPage.fillPriceAndMileage("1100", "2500");

        vehicleDataPage.goToNextSection();

        // Filling Insurant Data
        insurantDataPage.fillPersonalInfo("Paulo", "Silva", "11/16/1999", "Male");
        insurantDataPage.fillAddress("5th Street", "United States", "77477", "Stafford");
        insurantDataPage.selectOccupation("Employee");
        insurantDataPage.selectHobbies(["Speeding", "Bungee Jumping"]);
        insurantDataPage.fillWebsite("google.com");
        insurantDataPage.uploadPicture('C:\\Users\\notad\\Downloads\\imagesample.png');

        insurantDataPage.goToNextSection();

        // Filling Product Data
        productDataPage.fillStartDate("11/16/2025");
        productDataPage.selectInsuranceSum('5.000.000,00');
        productDataPage.selectMeritRating('Bonus 5');
        productDataPage.selectDamageInsurance('Full Coverage');
        productDataPage.selectOptionalProducts(['EuroProtection', 'LegalDefenseInsurance']);
        productDataPage.selectCourtesyCar('Yes');

        productDataPage.goToNextSection();

        // Filling Price Option
        priceOptionPage.selectPriceOption('Gold');

        priceOptionPage.goToNextSection();

        // Filling Send Quote
        sendQuotePage.fillQuoteDetails("paulonsteste@gmail.com", "12345678", "paulons", "Paulo123", "Greetings, this is the comment section");
        sendQuotePage.sendQuote();
    });
});
