# Project 02 · DN600 Class 600 All-Welded Fixed Ball Valve

## 01 Overview

Structural-integrity evaluation of a large all-welded fixed ball valve for oil and gas pipeline service.

## 02 Design requirement

- Nominal size: DN600
- Pressure class: Class 600
- Full-bore passage: 600 mm
- Ball diameter: 930 mm
- Design temperature: −46 to 121 °C
- Base internal pressure: 10.2 MPa

## 03 CAD modeling

Six-component architecture: valve body, ball, upper stem, lower stem, seal ring and bearing.

## 04 Simulation setup

The global tetrahedral model contains 1,066,690 nodes and 714,973 elements. Small manufacturing features are removed while pressure-boundary geometry, section transitions, pipe connections, stem supports and the seal-adjacent region are retained.

## 05 Results

- LC1 pressure: 93.754 MPa / 0.650 mm
- LC2 pressure + 121 °C: 126.01 MPa / 205.96 mm (thermal expansion dominated)
- LC3 pressure + 2.88 MN axial load: 133.04 MPa / 0.8127 mm
- LC4 pressure + 864 kN·m bending moment: 123.63 MPa / 0.658 mm

LC3 governs mechanical stress. Against the 250 MPa yield strength used for the ASTM A350 LF2 valve body, the conservative safety factor is approximately 1.88.

## 06 Optimization

The optimization scope is the analysis model and evaluation path, not a claimed lightweight redesign: simplify non-critical details, preserve the force path, compare four cases consistently and identify regions requiring detailed local analysis.

## 07 Engineering conclusion

The global model supports an acceptable yield margin for the evaluated load combinations. Detailed sealing, weld and local contact conclusions require higher-fidelity submodels or test evidence.

