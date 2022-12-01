# Step 4 – Reward

The last step in the Praise process is to reward contributors. Rewards can be monetary or non-monetary, the process is completely up to the community. Praise provides a simple reward distribution tool that exports a CSV file that can be used for the distribution. The distribution tool currently exports to the following formats: [Gnosis Safe - CSV Airdrop](https://gnosis-safe.io/), [Aragon Transactions](https://docs.evmcrispr.blossom.software/aragonOS/transactions). Miss more formats? [Post an issue and let us know](https://github.com/givepraise/export-transformers).

In addition to an export format you can also choose a distribution strategy. Choose from one of the predefined distribution strategies or [create your own](https://github.com/givepraise/export-transformers).

In addition to the current export formats and distribution strategies, we are working on adding support for: NFT minting, POAP minting, built in minting of non monetary reputation tokens, and more.

## Reward distribution strategies

### [Fixed budget](https://github.com/givepraise/export-transformers/tree/main/aragon-fixed-budget)

This distribution uses a fixed period budget and a straight proportional distribution. A praise receiver with 1% of the total praise score will receive 1% of the period budget.

### [Straight curve with ceiling](https://github.com/givepraise/export-transformers/tree/main/aragon-straight-curve-with-ceiling)

This distribution calculates the period budget using a straight curve with a ceiling. Few praise in a period means small distribution budget and vice versa.
