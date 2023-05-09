# Period defaults

The period defaults serves as a template when creating new periods. Changes to the setting apply only to newly created periods.

## Quantifiers Per Praise

`Default value: 3`

Allowing more than one person to quantify each praise improves the quality of quantifications because of decreased personal bias. Increasing the number of quantifiers also decreases the risk of scoring collusion between quantifiers and praise receivers. The final praise score is an average of the individual quantifications.

Increasing this value requires more users to be in the [quantifier pool](/glossary#quantifier-pool).

## Praise Per Quantifier

`Default value: 100`

The second value that determines the number of users needed in the [quantifier pool](/glossary#quantifier-pool) is this. `Praise Per Quantifier` determines the workload of each individual quantifier. The more praise a quantifier gets assigned, the higher the workload is and the less quantifiers needed in the pool.

Note that the exact number of praise per quantifier can differ from this setting after assigning. The assignment algorithm also need to take into account the total number of praise, the number of quantifiers and who praised who.

:::info

A quantifier always gets assigned **all** praise for a receiver in a given period. This is to allow quantifiers to identify receivers being given duplicate praise during a period.

:::

## Use Pseudonyms

`Default value: off`

Turning this on obscures giver and receiver names by a random pseudonym during quantification. This might lead to lower personal bias from the quantifier.

## Duplicate Praise Quantification Percentage

`Default value: 0.1 (10%)`

A receiver getting praised two times for the same contribution should not get double the praise score, that is quite obvious. Both praise still refer to one single controbution. Allowing for that would see Praise deteriorate into a popularity contest where persons that manage to get the community to praise their actions the most number of times end up on top. But, multiple praise for the same contribution is not a non-signal, it is not pure noise. By changing this setting you allow duplicate praise to "inherit" some of the value of the original.

Example:

```
Duplicate Praise Quantification Percentage: 20%

First praise:
  /praise person A from person B for "holding a great talk at the conference"

Second praise:
  /praise person A from person C for "giving a super interesting talk at the conference"

Scoring:
  First praise: 144
  Second praise: 28.8 (20% of "original")
```

## Quantification Values Options

`Default value: 0, 1, 3, 5, 8, 13, 21, 34, 55, 89, 144`

Quantifiers are not allowed to select values freely when quantifying praise. The scores are selected from a slider using these preset values.

The default scoring scale uses a logarithmic fibonacci sequence where the score of 1 could be thought of as representing the _smallest possible contribution_ to the community and 144 representing the _largest possible contribution_.

The reasoning behind using a fibonacci sequence is similar to why that scale is being used in Agile development when estimating the size and complexity of upcoming work. We want to give quantifiers "few" values to select from to simplify the process of quantification. And, we want the "distance" from the smallest contribution to the largest to be quite big. Imagine a scale of 1-20 instead. Determining if a contribution is worth a score of 16 or 17 is really difficult. Distinguishing between 55 and 89 is far easier.

See article for more details: [Fibonacci Agile Estimation](https://www.productplan.com/glossary/fibonacci-agile-estimation/)

## Assign praise evenly among quantifiers

In a situation where there are few quantifiers or only a small amount of praise you might want to bypass the randomised assignment algorithm and instead assign praise evenly among quantifiers.

If enabled, the setting `Quantifiers Per Praise` will be ignored.
