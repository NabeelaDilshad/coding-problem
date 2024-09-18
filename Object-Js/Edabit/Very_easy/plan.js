/**
BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

 */


 const  BasicPlan =  {
    canStream: true,
    canDownload: true,
    hasSD: true,
    hasHD: false,
    hasUHD: false,
    numOfDevices: 1,
    price: 8.99,
  }

  const StandardPlan = {
    canStream: true,
    canDownload: true,
    hasSD: true,
    hasHD: true,
    hasUHD: false,
    numOfDevices: 2,
    price: 12.99,
  }
 const  PremiumPlan =  {
    canStream: true,
    canDownload: true,
    hasSD: true,
    hasHD: true,
    hasUHD: true,
    numOfDevices: 4,
    price: 15.99,
  }
console.log(
  BasicPlan.hasSD,
  PremiumPlan.hasSD,
  BasicPlan.hasUHD,
  BasicPlan.price,
  PremiumPlan.numOfDevices
);
