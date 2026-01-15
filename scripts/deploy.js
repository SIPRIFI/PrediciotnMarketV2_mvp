async function main() {
  const PredictionMarket = await ethers.getContractFactory("PredictionMarketV2");

  const pm = await PredictionMarket.deploy();
  await pm.waitForDeployment();

  console.log("PredictionMarketV2 deployed to:", await pm.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
