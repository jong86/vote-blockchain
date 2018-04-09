var ConvertLib = artifacts.require("./ConvertLib.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Voting);
  deployer.deploy(Voting, ["Alice", "Bob", "Charmander"]);
};
