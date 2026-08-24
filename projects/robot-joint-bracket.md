# Project 01 · Robot Joint Bracket Structural Optimization

## 01 Overview

Lightweight a robot joint mounting bracket while preserving the installation interfaces, load path, stiffness, strength and CNC manufacturability.

## 02 Design requirement

- Material: 6061-T6 aluminum
- Conservative design torque: 35 N·m
- Allowable stress: 125 MPa
- Deformation limit: 0.20 mm
- Required mass reduction: at least 15%

## 03 CAD modeling

Three comparable CAD variants retain the same functional interfaces. Mass decreases from 0.518 kg (V1) to 0.453 kg (V2) and 0.435 kg (V3).

## 04 Simulation setup

ANSYS static structural analysis covers three load cases. LC3 combines torque, axial force and lateral force. Global mesh size is refined from 6 mm to 3 mm, with 1 mm local refinement in key regions.

## 05 Results

V3 fine-mesh LC3 results: 32.919 MPa maximum equivalent stress, 0.006209 mm total deformation and a conservative safety factor of 7.59 against 250 MPa yield strength.

## 06 Optimization

Material is reallocated based on the load path and low-contribution regions rather than uniform thinning. V3 achieves 16.0% mass reduction.

## 07 Engineering conclusion

V3 satisfies the stated mass, stress and displacement criteria. Displacement converges while the idealized support-edge stress peak remains mesh-sensitive, so the finest-mesh result is used for conservative verification.

