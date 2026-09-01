#!/bin/bash

# Simple interest calculator
# Formula: Simple Interest = Principal × Rate × Time / 100

read -p "Enter Principal: " principal
read -p "Enter Rate of interest: " rate
read -p "Enter Time period: " time

# Validate numeric input
if ! [[ "$principal" =~ ^[0-9]+([.][0-9]+)?$ ]] || ! [[ "$rate" =~ ^[0-9]+([.][0-9]+)?$ ]] || ! [[ "$time" =~ ^[0-9]+([.][0-9]+)?$ ]]; then
    echo "Error: Please enter numeric values for Principal, Rate, and Time."
    exit 1
fi

interest=$(awk -v p="$principal" -v r="$rate" -v t="$time" 'BEGIN { printf "%.2f", (p * r * t) / 100 }')

echo "Simple Interest = $interest"
