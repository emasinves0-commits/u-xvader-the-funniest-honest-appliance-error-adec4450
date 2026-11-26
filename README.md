# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/emasinves0-commits/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/emasinves0-commits/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

## The entry

> Drain pump blocked by 147 unbroken chopsticks. Water level rising. Proceeding anyway.

A dishwasher's deadpan error message: the drain pump is jammed by chopsticks, the water is rising, and the machine carries on regardless.

## What the program does

`main.ts` holds the entry line and checks it before writing: exactly one line, 1 to 200 characters, not only whitespace. If any check fails, or `MAKEFUN_OUTPUT_DIR` is unset, it prints an error to stderr and exits with code 1. Otherwise it writes the line to `entry.txt` in that directory, with no trailing newline. It uses only Node.js built-ins and makes no network calls.

## How to run

```
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This needs a Node.js version that runs `.ts` files natively (Node 24 was used). The result is `$MAKEFUN_OUTPUT_DIR/entry.txt`.

## How it was verified

I ran `MAKEFUN_OUTPUT_DIR=./scratch-out node main.ts` and compared the output file with the expected text. It exited 0 and the file was byte-for-byte identical to the line above: 85 bytes, 85 characters, 0 newline bytes. I also ran it with the variable unset. It exited 1 with `error: MAKEFUN_OUTPUT_DIR is not set`. The scratch directory was deleted afterwards.
